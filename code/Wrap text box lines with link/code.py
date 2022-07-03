import os
print(os.listdir())

f = open("D:/Programing/Web/SALT/code/Wrap text box lines with link/text.txt", "r")
o = open("D:/Programing/Web/SALT/code/Wrap text box lines with link/output.txt", "a")
for x in f:

    o.write("<div class='textbox' onclick='window.location.href='universities''>\n")
    o.write("<div class='profiletext'>\n")
    o.write("<h1>\n")
    o.write(x[:-1] + "\n")
    o.write("</h1>\n")
    o.write("</div>\n")
    o.write("</div>\n")

f.close()
o.close()
