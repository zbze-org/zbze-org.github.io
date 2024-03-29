# Сравнение Инструментов OCR

- **Abbyy FineReader**
  - Поддерживает кабардино-черкесский язык.
  - Лучший по качеству распознавания
- **EasyOCR**
  - Бесплатный, открытый, легко добавить поддержку языка, но качество распознавания желает лучшего.
- **Tesseract**
  - Бесплатный, открытый, сложно добавить поддержку языка, качество распознавания близкое к Abbyy FineReader.

## Таблица сравнения

| Характеристика                   | Abbyy FineReader      | EasyOCR                  | Tesseract                 |
|----------------------------------|-----------------------|--------------------------|---------------------------|
| Поддержка языка                  | Поддерживает          | Легко добавить поддержку | Сложно добавить поддержку |
| Тип лицензии                     | Коммерческая          | Open Source              | Open Source               |
| Качество распознавания           | Лучший                | Хорошее                  | Хорошее                   |
| Возможность улучшения            | Нет                   | Ограничена               | Высокая                   |
| Обучение модели                  | Н/Д                   | Не обязательно           | Необходимо                |
| Сохранение форматирования текста | Хорошее               | Теряет форматирование    | Почти не теряется         |
| Скорость на CPU                  | Н/Д                   | Медленный                | Бодрый                    |
| Скорость на GPU                  | Н/Д                   | Приемлемый на GPU        | Н/Д                       |
| Возможность распараллеливания    | Ограничен             | Сложно распараллелить    | Легко распараллелить      |
| Экспорт в форматы с разметкой    | Ограничен             | Нет                      | Есть (hOCR, ALTO, TSV)    |
| Клиент для Linux                 | Нет                   | написан на python        | есть обертка для python   |
| API                              | Дорогое (~5$ 1k page) | Ограниченное             | Удобное                   |
| Удобство при автоматизации       | Неудобный             | Неудобный                | Удобный                   |
