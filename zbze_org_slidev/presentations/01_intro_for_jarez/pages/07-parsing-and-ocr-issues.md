# Вернемся к ~~нашим баранам~~ текущим вызовам

---
style: |
  font-size: 0.9em;
---

# Вызовы Сбора Текста: Парсинг и OCR

Сбор текстовых данных сталкивается с рядом вызовов, особенно когда речь заходит о парсинге веб-контента и обработке сканированных документов с помощью OCR.

<v-click>

**Парсинг**
- **Ограниченное разнообразие:** Данные, собранные через парсинг веб-сайтов, часто оказываются однообразными как по стилю, так и по содержанию, что ограничивает их полезность для обучения моделей.
- **Недостаточное количество:** Для обучения эффективных моделей машинного обучения требуются большие объемы данных, которые зачастую сложно получить через обычный парсинг.

</v-click>

<v-click>

**OCR (Оптическое распознавание символов)**
- **Качество сканов:** Сканы, особенно старых книг и документов, часто бывают плохого качества — изношенные страницы, сканирование двойными страницами, скошенные или повернутые изображения, а также дубликаты страниц и нарушенный порядок.
- **Технические сложности:** Высокие требования к качеству материала и несовершенство OCR инструментов вставляют палки в колеса при сборе. 

</v-click>

---

## Как с этим бороться?

Собрал два проекта, оформил их в репозитории:

- инструмент для парсинга https://github.com/zbze-org/zbze_crawler
- инструмент для OCR https://github.com/zbze-org/zbze_ocr
