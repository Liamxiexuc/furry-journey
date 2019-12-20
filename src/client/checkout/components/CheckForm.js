import React from "react";
import { Form, Button, Confirm, TextArea } from "semantic-ui-react";
import "../styles/CheckOut.scss"

const CheckForm = props => {
  const {
    error,
    isLoading,
    address,
    name,
    number,
    comment,
    handleChange,
    handlePay,
    isPay,
    handleCancel,
    handleConfirm
  } = props;

  return (
    <Form>
      <Form.Input
        error={
          error === true
            ? {
                content: "Please enter your name",
                pointing: "below"
              }
            : false
        }
        fluid
        label="NAME"
        id="form-input-first-name"
        name="name"
        value={name}
        onChange={handleChange}
        required
      />
      <Form.Input
        error={
          error === true
            ? {
                content: "Please enter your phone number",
                pointing: "below"
              }
            : false
        }
        fluid
        label="PHONE"
        name="number"
        value={number}
        onChange={handleChange}
        type="number"
        required
      />
      <Form.Input
        error={
          error === true
            ? {
                content: "Please enter your address",
                pointing: "below"
              }
            : false
        }
        fluid
        label="ADDRESS"
        name="address"
        value={address}
        onChange={handleChange}
        required
      />
      <label>COMMENT</label>
      <TextArea name="comment" value={comment} onChange={handleChange} />
      <div className="checkout-btn">
        <Button
          negative
          fluid
          loading={isLoading === true ? true : false}
          type="submit"
          onClick={handlePay}
        >
          Pay
        </Button>
        <Confirm
          open={isPay}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
          header="Confirm Your Order"
          size="small"
        />
      </div>

    </Form>
  );
};

export default CheckForm;
