export async function onRequestPost(context) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const { amount, note } = await context.request.json();

    // Validate amount (in dollars)
    const amountNum = parseInt(amount, 10);
    if (!amountNum || amountNum < 1 || amountNum > 2000) {
      return new Response(JSON.stringify({ error: 'Amount must be between $1 and $2000' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const origin = new URL(context.request.url).origin;
    const STRIPE_SECRET_KEY = context.env.STRIPE_SECRET_KEY;

    // Create Stripe Checkout Session via REST API (no SDK needed)
    const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'mode': 'payment',
        'payment_method_types[]': 'card',
        'line_items[0][price_data][currency]': 'usd',
        'line_items[0][price_data][product_data][name]': 'Wedding Gift for Frank & Patrick',
        'line_items[0][price_data][product_data][description]': note || 'A heartfelt gift',
        'line_items[0][price_data][unit_amount]': String(amountNum * 100),
        'line_items[0][quantity]': '1',
        'success_url': origin + '/gifting?payment=success',
        'cancel_url': origin + '/gifting?payment=cancelled',
      }),
    });

    const session = await response.json();

    if (!response.ok) {
      console.error('Stripe error:', JSON.stringify(session));
      const msg = session.error ? session.error.message : JSON.stringify(session);
      return new Response(JSON.stringify({ error: msg }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Error:', err.message);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
