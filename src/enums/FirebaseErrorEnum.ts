
//===========================================================\\
// @author: caduuv
//===========================================================\\

enum FirebaseResponseMessage {
    "auth/invalid-email" = "O endereço de e-mail fornecido não é válido.",
    "auth/user-disabled" = "Esta conta foi desativada por um administrador.",
    "auth/user-not-found" = "Não há registro de usuário correspondente a este email.",
    "auth/wrong-password" = "Senha Inválida.",
    "auth/email-already-in-use" = "O endereço de e-mail já está sendo usado por outra conta.",
    "auth/operation-not-allowed" = "O provedor de autenticação correspondente a esta credencial foi desativado para o projeto Firebase.",
    "auth/weak-password" = "A senha deve ter pelo menos 6 caracteres.",
    "auth/requires-recent-login" = "Esta operação é sensível e requer autenticação recente. Faça login novamente antes de tentar novamente esta solicitação.",
    "auth/user-mismatch" = "As credenciais fornecidas não correspondem ao usuário anteriormente sign-in.",
    "auth/provider-already-linked" = "O provedor de autenticação fornecido já está vinculado à conta do usuário atual.",
    "auth/credential-already-in-use" = "Esta credencial já está associada a outra conta de usuário.",
    "auth/account-exists-with-different-credential" = "O endereço de e-mail já está associado a outra conta.",
    "auth/network-request-failed" = "Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível).",
    "auth/invalid-credential" = "A credencial fornecida para a autenticação é inválida.",
    "auth/user-token-expired" = "O token do usuário atual expirou.",
    "auth/too-many-requests" = "Detectamos atividade incomum em sua conta e bloqueamos temporariamente a ação.",
    "auth/quota-exceeded" = "O projeto atingiu a cota diária de solicitações de autenticação.",
    "auth/provider-not-found" = "Não há provedor de autenticação correspondente para o tipo de credencial fornecido.",
    "auth/invalid-user-token" = "O token do usuário atual é inválido.",
    "auth/invalid-verification-code" = "O código de verificação fornecido não é válido.",
    "auth/missing-verification-code" = "Um código de verificação deve ser fornecido.",
    "auth/invalid-verification-id" = "O ID de verificação fornecido não é válido.",
  }
  
  export function getFirebaseResponseMessage(errorCode: keyof typeof FirebaseResponseMessage): string | undefined {
    return FirebaseResponseMessage[errorCode];
  }