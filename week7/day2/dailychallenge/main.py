str_test = """
    7I3
    Tsi
    h%x
    i #
    sM 
    $a 
    #t%
    ^r!
"""

l1 = str_test.split("\n")

l1.remove('')

str_arr = ""
for k in range(0, len(max(l1, key=len))):

    for l in l1:
        if k > len(l) - 1:
            break

        if l[k].isalpha():
            if str(l[k]).isupper() and k != 0:
                str_arr += ' '
            str_arr += str(l[k])

print(str_arr)
for l in l1:
        if k > len(l) - 1:
            break

        if l[k].isalpha():
            if str(l[k]).isupper() and k != 0:
                str_arr += ' '
            str_arr += str(l[k])
            print(str_arr)nt(new_string)

