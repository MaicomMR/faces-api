exports.getHome = (req, res) => {
    const baseURL = `${req.protocol}://${req.get('host')}`;
    res.status(500).json({
        mensagem: "Bem-vindo à API de processamento de imagens!",
        instrucoes: `Para teste teste acessar, utilize: ${baseURL}/crop/{category}/{width}/{height}`,
        exemplo: `${baseURL}/crop/1/200/300`
    });
};
