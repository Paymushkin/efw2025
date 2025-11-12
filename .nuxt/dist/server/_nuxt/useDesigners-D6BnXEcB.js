import { ref, readonly } from "vue";
const LOCAL_DESIGNERS_DATA = {
  "8": [
    { name: "NOURA COUTURE", country: "UAE", day: "8", month: "November", confirmed: true },
    { name: "ANNET", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "LESNIKOVA DRESSES", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "SOLANA COUTURE", country: "USA", day: "8", month: "November", confirmed: true },
    { name: "LORA COUTURE", country: "AZERBAIJAN", day: "8", month: "November", confirmed: true },
    { name: "ETNO FRESH", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "BELIZE", country: "GERMANY", day: "8", month: "November", confirmed: true },
    { name: "MOONSOUL", country: "KIRGHIZIAN", day: "8", month: "November", confirmed: true },
    { name: "OLECIA ARKHIPOVA", country: "RUSSIA", day: "8", month: "November", confirmed: true },
    { name: "MARIANNE MOORE", country: "", day: "8", month: "November", confirmed: true },
    { name: "IGARNITUR", country: "POLAND", day: "8", month: "November", confirmed: true },
    { name: "HERBELIN", country: "POLAND", day: "8", month: "November", confirmed: true },
    { name: "DEVU", country: "POLAND", day: "8", month: "November", confirmed: true }
  ],
  "9": [
    { name: "ALEXANDRA AMA CABINET", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "ARNI FASHION", country: "USA/INDIAN", day: "9", month: "November", confirmed: true },
    { name: "RUBASHKA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "SNIM", country: "KAZAKHSTAN", day: "9", month: "November", confirmed: true },
    { name: "KIBOVSKAYA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "FYOR", country: "UAE", day: "9", month: "November", confirmed: true },
    { name: "POLINA TROPILLO", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "OLGA BOGDANOVA", country: "RUSSIA", day: "9", month: "November", confirmed: true },
    { name: "ELENA ROMANOVA", country: "RUSSIA", day: "9", month: "November", confirmed: true }
  ]
};
const updateLocalDesignersData = (newData) => {
  console.log("🔄 Обновляем локальные данные дизайнеров:", newData);
  return newData;
};
const useDesigners = () => {
  const designers = ref(LOCAL_DESIGNERS_DATA);
  const loading = ref(false);
  const error = ref(null);
  const isDataUpdated = ref(false);
  const fetchDesigners = async () => {
    if (isDataUpdated.value) {
      console.log("📋 Данные уже обновлены, пропускаем запрос");
      return;
    }
    loading.value = true;
    error.value = null;
    try {
      console.log("🌐 Запрашиваем актуальные данные дизайнеров из Google Sheets...");
      const SPREADSHEET_ID = "1hr5eZ148EVDLhAdcY6L1t_PyNGlBtlQNIKm1jGhrQhw";
      const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
      const response = await fetch(CSV_URL);
      if (!response.ok) {
        throw new Error(`CSV export error: ${response.statusText}`);
      }
      const csvText = await response.text();
      console.log("📊 Получены CSV данные:", csvText.substring(0, 200) + "...");
      const lines = csvText.split("\n");
      const rows = lines.filter((line) => line.trim()).map((line) => {
        const values = [];
        let current = "";
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === "," && !inQuotes) {
            values.push(current.trim());
            current = "";
          } else {
            current += char;
          }
        }
        values.push(current.trim());
        return values;
      });
      const designersData = rows.slice(1).map((row, index) => ({
        name: row[0] || "",
        country: row[1] || "",
        day: row[2] || "",
        month: row[3] || "",
        confirmed: row[4] === "TRUE"
      })).filter((designer) => designer.name);
      const designersByDay = designersData.reduce((acc, designer) => {
        const day = designer.day;
        if (!acc[day]) {
          acc[day] = [];
        }
        acc[day].push(designer);
        return acc;
      }, {});
      designers.value = designersByDay;
      updateLocalDesignersData(designersByDay);
      isDataUpdated.value = true;
      console.log("✅ Данные дизайнеров обновлены из Google Sheets:", designers.value);
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error";
      console.error("❌ Ошибка запроса:", error.value);
      console.log("📋 Используем локальные данные (уже загружены)");
    } finally {
      loading.value = false;
    }
  };
  const maskName = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.map((word) => {
      if (word.length <= 2) {
        return word.charAt(0) + "*".repeat(word.length - 1);
      }
      const firstChar = word.charAt(0);
      const lastChar = word.length > 1 ? word.charAt(word.length - 1) : "";
      const middleStars = "*".repeat(Math.max(1, word.length - 2));
      return firstChar + middleStars + (lastChar ? lastChar : "");
    }).join(" ");
  };
  const formatDesigner = (designer) => {
    const name = designer.name;
    const country = designer.country;
    if (designer.confirmed) {
      return `• ${name} - ${country}`;
    } else {
      return `• ${name} - ${country} *PENDING MUTUAL APPROVAL`;
    }
  };
  const getDesignersByDay = (day) => {
    return designers.value[day] || [];
  };
  const getFormattedDesignersByDay = (day) => {
    const dayDesigners = getDesignersByDay(day);
    return dayDesigners.map(formatDesigner);
  };
  return {
    designers: readonly(designers),
    loading: readonly(loading),
    error: readonly(error),
    isDataUpdated: readonly(isDataUpdated),
    fetchDesigners,
    maskName,
    formatDesigner,
    getDesignersByDay,
    getFormattedDesignersByDay
  };
};
export {
  useDesigners as u
};
//# sourceMappingURL=useDesigners-D6BnXEcB.js.map
