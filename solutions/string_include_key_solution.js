function stringIncludeKey(string, key) {
  if (!key.length) return true;

  let nextKeyChar = key[0];
  let keyIndex = string.indexOf(nextKeyChar);

  if (keyIndex < 0) return false;
  return stringIncludeKey(string.slice(keyIndex + 1), key.slice(1))
}

console.log(stringIncludeKey("adbclfci", "abbc"));

// def string_include_key?(string, key)
//   return true if key.length == 0
//
//   next_key_char = key.chars.first
//   key_index = string.index(next_key_char)
//
//   return false if key_index.nil?
//   string_include_key?(string[key_index+1..-1], key[1..-1])
// end
