exports.getHome = (req, res) => {
    const baseURL = `${req.protocol}://${req.get('host')}`;
    res.status(200).json({
        mensagem: "Bem-vindo à API de processamento de imagens!",
        instrucoes: `Para, acesse o link com os parâmetros de acordo: ${baseURL}/crop/{category}/{width}/{height}`,
        exemplo: `${baseURL}/crop/1/200/300`
    });
};
