exports.getHome = (req, res) => {
    const baseURL = `${req.protocol}://${req.get('host')}`;
    res.status(500).json({
        mensagem: "Bem-vindo à API de processamento de imagens!",
        instrucoes: `Para, acesse o link com os parâmetros de acordo: ${baseURL}/crop/{category}/{width}/{height}`,
        exemplo: `${baseURL}/crop/1/200/300`
    });
};

// Essa PR vai explodir o mundo?
// Talvez sim, talvez não...
// Eh, mas acho que sim
