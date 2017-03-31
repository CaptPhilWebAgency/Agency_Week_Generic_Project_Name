Rails.configuration.stripe = {
  stripe_test: ENV['stripe_test'],
  stripe_test_publishable: ENV['stripe_test_publishable']
}

Stripe.api_key = Rails.configuration.stripe[:stripe_test]
