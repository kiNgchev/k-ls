function to_url(hash) {
  hash = hash.replace(/-/g, '+').replace(/_/g, '/');
  while (hash.length % 4) {
    hash += '=';
  }
  return Buffer.from(hash, 'base64').toString('utf-8');
  
}
function to_hash(url) {
  return Buffer.from(url)
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
}

module.exports = {
  to_hash,
  to_url
}