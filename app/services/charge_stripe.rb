class ChargeStripe

  attr_accessor :user,
                :amount,
                :customer,
                :result,
                :token

  def initialize(user, amount, token = nil)
    self.user = user if user
    self.amount = amount
    self.token = token if token
  end

  def charge_them
    self.customer = user.customer_id ? user.customer_id : create_customer # unless user.customer_id
    charge_customer
    output_result
  end

  def create_customer
    self.customer = Stripe::Customer.create(
      source: token
    ).id
  end

  def charge_customer
    begin
      Stripe::Charge.create(
        customer: customer,
        amount:      amount,
        description: 'Iron Glory Purchase',
        currency: 'usd'
      )
      self.result = {success: true}
    rescue Stripe::CardError => e
      self.result = {error: e.message}
    end
  end

  def output_result
    result
  end

end
