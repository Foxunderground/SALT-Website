import os
print(os.listdir())

f = open("D:/Programing/Web/SALT/code/Wrap text box lines/text.txt", "r")
o = open("D:/Programing/Web/SALT/code/Wrap text box lines/output.txt", "w")
for x in f:

    print("<div class='textbox'>")
    print("<div class='profiletext'>")
    print("<h1>")
    print(x[:-1])
    print("</h1>")
    print("</div>")
    print("</div>")

    o.write("<div class='textbox'>\n")
    o.write("<div class='profiletext'>\n")
    o.write("<h1>\n")
    o.write(x[:-1] + "\n")
    o.write("</h1>\n")
    o.write("</div>\n")
    o.write("</div>\n")

f.close()
o.close()
