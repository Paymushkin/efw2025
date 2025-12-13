/**
 * Скрипт для локального preview production build
 * Временно меняет preset на 'node-server' для возможности preview
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configPath = join(__dirname, '..', 'nuxt.config.ts');

console.log('📦 Создание production build для локального preview...\n');

let originalConfig = '';

try {
  // Читаем конфиг
  originalConfig = readFileSync(configPath, 'utf-8');
  
  // Сохраняем оригинальный preset
  const originalPreset = originalConfig.match(/preset:\s*['"]([^'"]+)['"]/)?.[1] || 'vercel';
  
  // Временно меняем на 'node-server' для preview
  const modifiedConfig = originalConfig.replace(
    /preset:\s*['"]([^'"]+)['"]/,
    "preset: 'node-server'"
  );
  
  // Записываем измененный конфиг
  writeFileSync(configPath, modifiedConfig);
  
  console.log(`✅ Временно изменил preset с '${originalPreset}' на 'node-server'`);
  console.log('🔨 Запускаю build (пропускаю prebuild hook для preview)...\n');
  
  // Запускаем build напрямую через npx, чтобы пропустить npm prebuild hook
  // Это позволяет избежать ошибок при обновлении данных из Google Sheets
  execSync('npx nuxt build', { stdio: 'inherit' });
  
  console.log('\n✅ Build завершен!');
  console.log('🚀 Запускаю preview сервер...\n');
  console.log('💡 После завершения preview нажмите Ctrl+C для остановки\n');
  
  // Запускаем preview
  execSync('npm run preview', { stdio: 'inherit' });
  
} catch (error: any) {
  console.error('❌ Ошибка:', error.message);
  process.exit(1);
} finally {
  // Восстанавливаем оригинальный конфиг
  try {
    if (originalConfig) {
      writeFileSync(configPath, originalConfig);
      console.log('\n✅ Восстановил оригинальный preset: vercel');
    }
  } catch (e: any) {
    console.error('⚠️  Не удалось восстановить конфиг:', e.message);
    console.error('⚠️  Пожалуйста, вручную проверьте nuxt.config.ts и установите preset: "vercel"');
  }
}

