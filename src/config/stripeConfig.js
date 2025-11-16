import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    'pk_test_51SSNizDf2Th9ZUelJbs8XRwh5emEMRs2gsd8W9KH8CjF7inhGWgTI6QTbH8f57dtmBFFX2vyHeZ1FhqpwzXW0ntS001eNPoRgz'
);

export default stripePromise;