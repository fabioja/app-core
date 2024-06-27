import { Router } from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { loadProxyConfig, ProxyConfig } from '../config/proxyConfig';

const router = Router();

// Função para aplicar proxies dinamicamente
function applyProxies(config: ProxyConfig) {
    Object.keys(config).forEach((context) => {
        router.use(context, createProxyMiddleware(config[context]));
    });
}

// Carregar e aplicar proxies ao iniciar
const config = loadProxyConfig();
applyProxies(config);

// Endpoint para recarregar a configuração do proxy
router.post('/reload-proxy', (req, res) => {
    try {
        const newConfig = loadProxyConfig();
        applyProxies(newConfig);
        res.send('Proxy configuration reloaded');
    } catch (error) {
        res.status(500).send('Erro ao recarregar configuração do proxy');
    }
});

export default router;