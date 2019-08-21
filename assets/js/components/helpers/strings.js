export const truncate = (text, length = 190) => {
    if (!text) return '';
    return text.length > length ? `${text.slice(0, length)}...` : text;
};
