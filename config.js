const getConfig = (key) => {
  const defaultConfig = {
    SCHOOL_CODE: "test",
    PORT: 3000,
    TEST_ACCOUNT: "14468232290",
    TEST_PASSWORD: 23050704,
    TEST_TOKEN_NAME: "test-token",
  }
  if (process.env[key]) {
    return process.env[key]
  }
  if (defaultConfig[key]) {
    return defaultConfig[key]
  }
  return undefined
}

module.exports = getConfig
