function safeCall(f) {
  try {
    f();
    return true;
  } catch {
    return false;
  }
}

safeCall(() => console.log('Hello!'));
safeCall(() => JSON.parse('abc'));
safeCall(() => false);
safeCall(() => abc);
