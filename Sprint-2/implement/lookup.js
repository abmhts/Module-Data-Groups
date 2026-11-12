function createLookup(countryCurrencyPairs) {
  const c_Lookup = {};

  for (let i = 0; i < countryCurrencyPairs.length; i++) {
    const country = countryCurrencyPairs[i][0];
    const currency = countryCurrencyPairs[i][1];

    c_Lookup[country] = currency;
  }

  return c_Lookup;
}

module.exports = createLookup;
