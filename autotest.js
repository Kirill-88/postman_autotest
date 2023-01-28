// Тестирование статуса ответа
pm.test("Ожидаю статус ответа 200", function() {pm.response.to.have.status(200);})

// Тестирование времени отклика
pm.test("Response time is less than 200ms", function () {pm.expect(pm.response.responseTime).to.be.below(200);});

// Имя кода имеет строку
pm.test("Status code name has string", function () { pm.response.to.have.status("OK"); });

// Свойство ответа соответствует переменной
pm.test("Response property matches environment variable", function () {
  pm.expect(pm.response.json().host).to.eql(pm.environment.get("host"));
});