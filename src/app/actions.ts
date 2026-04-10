"use server";
import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const configPath = path.join(process.cwd(), "config.json");

export async function getConfig() {
  const defaultCheckouts = {
    "standard-silver": "https://urbannys.shop/cart/53300886798650:1",
    "standard-black": "https://urbannys.shop/cart/53300886831418:1",
    "standard-brushed-silver": "https://urbannys.shop/cart/53300886864186:1",
    "standard-gold": "https://urbannys.shop/cart/53300886896954:1",
    "standard-rose-gold": "https://urbannys.shop/cart/53300886929722:1",
    "standard-stealth": "https://urbannys.shop/cart/53300886962490:1",
    "ceramic-cloud": "https://urbannys.shop/cart/53300891353402:1",
    "ceramic-midnight": "https://urbannys.shop/cart/53300891386170:1",
    "ceramic-petal": "https://urbannys.shop/cart/53300891418938:1",
    "ceramic-tide": "https://urbannys.shop/cart/53300891451706:1"
  };

  try {
    const data = await fs.readFile(configPath, "utf-8");
    const parsed = JSON.parse(data);
    if (!parsed.checkouts || Object.keys(parsed.checkouts).length === 0) {
      parsed.checkouts = defaultCheckouts;
    }
    return parsed;
  } catch {
    return {
      price: "97",
      checkouts: defaultCheckouts,
      utmPixels: []
    };
  }
}

export async function saveConfig(password: string, newConfig: Record<string, unknown>) {
  if (password !== "aglomerado") {
    return { success: false, error: "Senha incorreta" };
  }
  
  try {
    await fs.writeFile(configPath, JSON.stringify(newConfig, null, 2), "utf-8");
    revalidatePath("/");
    revalidatePath("/config");
    return { success: true };
  } catch {
    return { success: false, error: "Erro ao salvar" };
  }
}
