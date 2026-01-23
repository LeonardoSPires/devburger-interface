import { loadStripe } from "@stripe/stripe-js";

// Use a chave pública via env var em produção
const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY ?? 'pk_test_51SSNizDf2Th9ZUelJbs8XRwh5emEMRs2gsd8W9KH8CjF7inhGWgTI6QTbH8f57dtmBFFX2vyHeZ1FhqpwzXW0ntS001eNPoRgz';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

export default stripePromise;