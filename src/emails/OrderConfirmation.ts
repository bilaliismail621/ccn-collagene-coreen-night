export function orderConfirmationHtml(orderId: string, amount: string) {
  return `
  <div style="font-family: sans-serif; max-width: 480px; margin: auto;">
    <h1 style="color:#d14b6f;">Merci pour votre commande !</h1>
    <p>Votre commande <strong>CCN - Collagène Coréen Night</strong> est confirmée.</p>
    <p>Numéro de commande : <strong>${orderId}</strong></p>
    <p>Montant payé : <strong>${amount} €</strong></p>
    <p>Nous préparons votre colis avec soin. Vous recevrez un email dès l'expédition.</p>
    <p style="margin-top:24px; font-size:12px; color:#888;">CCN - Collagène Coréen Night</p>
  </div>`;
}
