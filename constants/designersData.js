// Локальные данные дизайнеров для кэширования
// Эти данные будут отображаться до загрузки актуальных данных из Google Sheets

export const LOCAL_DESIGNERS_DATA = {
  '8': [
    { name: 'NOURA COUTURE', country: 'UAE', day: '8', month: 'November', confirmed: true },
    { name: 'ANNET', country: 'RUSSIA', day: '8', month: 'November', confirmed: true },
    { name: 'LESNIKOVA DRESSES', country: 'RUSSIA', day: '8', month: 'November', confirmed: true },
    { name: 'SOLANA COUTURE', country: 'USA', day: '8', month: 'November', confirmed: true },
    { name: 'LORA COUTURE', country: 'AZERBAIJAN', day: '8', month: 'November', confirmed: true },
    { name: 'ETNO FRESH', country: 'RUSSIA', day: '8', month: 'November', confirmed: true },
    { name: 'BELIZE', country: 'GERMANY', day: '8', month: 'November', confirmed: true },
    { name: 'MOONSOUL', country: 'KIRGHIZIAN', day: '8', month: 'November', confirmed: true },
    { name: 'OLECIA ARKHIPOVA', country: 'RUSSIA', day: '8', month: 'November', confirmed: true },
    { name: 'MARIANNE MOORE', country: '', day: '8', month: 'November', confirmed: true },
    { name: 'IGARNITUR', country: 'POLAND', day: '8', month: 'November', confirmed: true },
    { name: 'HERBELIN', country: 'POLAND', day: '8', month: 'November', confirmed: true },
    { name: 'DEVU', country: 'POLAND', day: '8', month: 'November', confirmed: true }
  ],
  '9': [
    { name: 'ALEXANDRA AMA CABINET', country: 'RUSSIA', day: '9', month: 'November', confirmed: true },
    { name: 'ARNI FASHION', country: 'USA/INDIAN', day: '9', month: 'November', confirmed: true },
    { name: 'RUBASHKA', country: 'RUSSIA', day: '9', month: 'November', confirmed: true },
    { name: 'SNIM', country: 'KAZAKHSTAN', day: '9', month: 'November', confirmed: true },
    { name: 'KIBOVSKAYA', country: 'RUSSIA', day: '9', month: 'November', confirmed: true },
    { name: 'FYOR', country: 'UAE', day: '9', month: 'November', confirmed: true },
    { name: 'POLINA TROPILLO', country: 'RUSSIA', day: '9', month: 'November', confirmed: true },
    { name: 'OLGA BOGDANOVA', country: 'RUSSIA', day: '9', month: 'November', confirmed: true },
    { name: 'ELENA ROMANOVA', country: 'RUSSIA', day: '9', month: 'November', confirmed: true }
  ]
};

// Функция для обновления локальных данных
export const updateLocalDesignersData = (newData) => {
  // В реальном приложении здесь можно сохранить в localStorage или другой кэш
  console.log('🔄 Обновляем локальные данные дизайнеров:', newData);
  return newData;
};

// Функция для получения локальных данных
export const getLocalDesignersData = () => {
  return LOCAL_DESIGNERS_DATA;
};


