# Omerbek Email Validate Node.js Project

Bu proje, e-posta adreslerini doğrulamak için Express kullanılarak geliştirilmiştir.

## Kurulum

Projeyi yerel olarak çalıştırabilmek için aşağıdaki adımları takip etmelisiniz:

1. Terminal ekranına şu komutu yazarak projeyi klonlayın:

    ```bash
    git clone https://github.com/omerbek/omerbekproject
    ```

2. Proje dizinine gidin:

    ```bash
    cd omerbekproject
    ```

3. Gerekli paketleri yüklemek için npm kullanarak şu komutu çalıştırın:

    ```bash
    npm install
    ```

4. Projeyi başlatmak için şu komutu kullanın:

    ```bash
    npm start
    ```

## Nginx ile Gerekli Ayarlar

Bu proje Nginx ile çalışmak üzere tasarlanmıştır. Aşağıdaki adımları takip ederek gerekli ayarları yapabilirsiniz:

```nginx
server {
    listen 443 ssl;
    server_name <domain> *.<domain>;

    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;

    location / {
        proxy_pass http://localhost:4444;
    }
}
