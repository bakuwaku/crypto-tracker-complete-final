document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/assets')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('crypto-list');
      container.innerHTML = '';
      data.data.slice(0, 10).forEach(coin => {
        const div = document.createElement('div');
        div.textContent = `${coin.rank}. ${coin.name} (${coin.symbol}) - $${parseFloat(coin.priceUsd).toFixed(2)}`;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error('Error loading top cryptocurrencies:', err);
      document.getElementById('crypto-list').textContent = 'Failed to load data.';
    });
});
