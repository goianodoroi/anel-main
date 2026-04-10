"use server";

import fs from "fs/promises";
import path from "path";

const configPath = path.join(process.cwd(), "config.json");

export async function getConfig() {
  try {
    const data = await fs.readFile(configPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {
      price: "97",
      utmPixels: []
    };
  }
}

export async function saveConfig(password: string, newConfig: any) {
  if (password !== "aglomerado") {
    return { success: false, error: "Senha incorreta" };
  }
  
  try {
    await fs.writeFile(configPath, JSON.stringify(newConfig, null, 2), "utf-8");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Erro ao salvar" };
  }
}
