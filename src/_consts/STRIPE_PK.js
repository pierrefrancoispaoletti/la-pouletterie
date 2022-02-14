export let STRIPE_PK;
if (process.env.NODE_ENV === "development") {
  STRIPE_PK = "pk_test_eAyr9trbJArTYHJJgEePgULj00lTTB2TXk";
} else {
  STRIPE_PK =
    "pk_live_51KSlpYKuxRjWa7cBtCXgoZtfEXwgdSxZzC3d5ZIXwy3heeQN2oUW8IWgVEPnJ3cbzvUSqtyn1My8RtmTzZg8Vxnf00zQcb2P5z";
}
