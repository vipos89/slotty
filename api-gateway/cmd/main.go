package main

import (
    "log"
    "net/http"
    "net/http/httputil"
    "net/url"
)

func main() {

    authServiceURL, err := url.Parse("http://auth-service:8080")
    if err != nil {
        log.Fatalf("Failed to parse auth service URL: %v", err)
    }

    authServiceProxy := httputil.NewSingleHostReverseProxy(authServiceURL)

    http.HandleFunc("/register", func(w http.ResponseWriter, r *http.Request) {
        authServiceProxy.ServeHTTP(w, r)
    })

    http.HandleFunc("/login", func(w http.ResponseWriter, r *http.Request) {
        authServiceProxy.ServeHTTP(w, r)
    })

    
    log.Println("API Gateway started on :8000")
    if err := http.ListenAndServe(":8000", nil); err != nil {
        log.Fatalf("Failed to start API Gateway: %v", err)
    }
}