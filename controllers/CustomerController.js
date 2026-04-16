const Customer = require("../models/CustomerModel");

// Add Customer
exports.addCustomer = async (req, res) => {
  try {
    const data = await Customer.create({
  ...req.body,
  user: req.user.id
});
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Get All Customers
exports.getCustomers = async (req, res) => {
  try {
   const data = await Customer.find({ user: req.user.id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Update Customer
exports.updateCustomer = async (req, res) => {
  try {
    const data = await Customer.findOneAndUpdate(
  { _id: req.params.id, user: req.user.id },
  req.body,
  { new: true }
);

    if (!data) {
      return res.status(404).json({ msg: "Customer not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Delete Customer
exports.deleteCustomer = async (req, res) => {
  try {
    const data = await Customer.findOneAndDelete({
  _id: req.params.id,
  user: req.user.id
});

    if (!data) {
      return res.status(404).json({ msg: "Customer not found" });
    }

    res.json({ msg: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};