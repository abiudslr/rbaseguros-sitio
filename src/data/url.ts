// Rutas con la base del sitio (GitHub Pages lo sirve en /rbaseguros-sitio/).
export const u = (path: string) => import.meta.env.BASE_URL.replace(/\/?$/, '/') + path.replace(/^\//, '');
