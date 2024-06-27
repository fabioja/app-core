import fs from 'fs';
import yaml from 'js-yaml';

export interface ProxyConfig {
    [key: string]: {
        target: string;
        pathRewrite?: { [key: string]: string };
    };
}

export function loadProxyConfig(): ProxyConfig {
    try {
        const fileContents = fs.readFileSync('./src/config/proxyConfig.yml', 'utf8');
        const data = yaml.load(fileContents) as ProxyConfig;
        return data;
    } catch (e) {
        console.error('Erro ao carregar arquivo YAML:', e);
        return {};
    }
}