cypher_text = ""

init = input('would you like to encrypt or decrypt? ')

if init == 'encrypt':
    text_in = input('Please enter a sentence to encrypt: ')
    shift_in = int(input('How much do you want to shift? '))
    for letter in text_in:
        cypher_text += chr(ord(letter) + shift)

if init == 'decrypt':
    text_out = input('Please enter a sentence to decrypt: ')
    shift_out = int(input('How much do you want to shift? '))
    for letter in text_out:
        cypher_text += chr(ord(letter) - 3)

print(cypher_text)