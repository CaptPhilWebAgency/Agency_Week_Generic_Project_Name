class ChargeStripe

  attr_accessor :user,
                :amount,
                :customer,
                :result,
                :token,
                :email

  def initialize(user, amount, token = nil, email = nil)
    self.user = user if user
    self.amount = amount
    self.token = token if token
    self.email = email if email
  end

  def charge_them
    self.customer = user.customer_id ? user.customer_id : create_customer # unless user.customer_id
    charge_customer
    output_result
  end

  def create_customer
    self.customer = Stripe::Customer.create(
      email: email
      source: token
    ).id
  end

  def charge_customer
    begin
      Stripe::Charge.create(
        id:
        description: 'Iron Glory Purchase',
        currency: 'usd',
        customer: customer,
        amount: amount
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
