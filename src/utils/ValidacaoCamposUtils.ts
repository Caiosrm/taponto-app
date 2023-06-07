//===========================================================\\
// @author: caduuv
//===========================================================\\

export const validaFormatoEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const validaSenhaForte = (senha: string) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return re.test(senha);
}