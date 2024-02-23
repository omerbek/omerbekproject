import re

def validate_email(email):
    # E-posta adresinin doğru formatta olup olmadığını kontrol etmek için bir regex kullanıyoruz
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    if re.match(pattern, email):
        return True
    else:
        return False

def main():
    email = input("Lütfen e-posta adresinizi girin: ")
    if validate_email(email):
        print("Girilen e-posta adresi geçerlidir.")
    else:
        print("Girilen e-posta adresi geçersizdir.")

if __name__ == "__main__":
    main()
