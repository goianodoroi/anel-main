"use client";

import { useState, useEffect } from "react";
import { saveConfig } from "../actions";

interface Config {
  price?: string;
  checkouts?: Record<string, string>;
  utmPixels?: Array<{ id: string; code: string }>;
}

export default function ConfigPage({ initialConfig }: { initialConfig: Config }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  
  const [price, setPrice] = useState(initialConfig.price || "97");
  const [checkouts, setCheckouts] = useState<Record<string, string>>(initialConfig.checkouts || {});
  const [utmPixels, setUtmPixels] = useState<Array<{ id: string; code: string }>>(initialConfig.utmPixels || []);
  const [msg, setMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "aglomerado") {
      setIsAuthenticated(true);
      setMsg("");
    } else {
      setMsg("Senha incorreta.");
    }
  };

  const handleSave = async () => {
    setMsg("Salvando...");
    const res = await saveConfig(password, {
      price,
      checkouts,
      utmPixels
    });
    if (res.success) {
      setMsg("Configurações salvas com sucesso!");
      setTimeout(() => setMsg(""), 3000);
    } else {
      setMsg(res.error || "Erro ao salvar.");
    }
  };

  const handleCheckoutChange = (key: string, value: string) => {
    setCheckouts({ ...checkouts, [key]: value });
  };


  const addUtmPixel = () => {
    setUtmPixels([...utmPixels, { id: Date.now().toString(), code: "" }]);
  };

  const updateUtmPixel = (id: string, code: string) => {
    setUtmPixels(utmPixels.map(pixel => pixel.id === id ? { ...pixel, code } : pixel));
  };

  const removeUtmPixel = (id: string) => {
    setUtmPixels(utmPixels.filter(pixel => pixel.id !== id));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[var(--oura-cream)] flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-[32px] w-full max-w-sm flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-[var(--oura-ink)]"></div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-[var(--oura-ink)] mb-2">Acesso Restrito</h1>
            <p className="text-sm text-[var(--oura-mute)]">Insira a senha para acessar o painel.</p>
          </div>
          <div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
              className="w-full px-4 py-3 rounded-full border border-[var(--oura-line)] outline-none focus:border-[var(--oura-ink)] focus:ring-1 focus:ring-[var(--oura-ink)] transition-all"
            />
          </div>
          <button type="submit" className="w-full bg-[var(--oura-ink)] text-white py-3 rounded-full font-medium hover:bg-[var(--oura-slate)] transition-all">
            Entrar
          </button>
          {msg && <p className="text-center text-red-500 text-sm mt-2">{msg}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--oura-cream)] p-6 md:p-12 text-[var(--oura-ink)] font-sans">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[var(--oura-line)]">
          <div>
            <h1 className="text-3xl font-medium tracking-tight">Painel Administrativo</h1>
            <p className="text-[var(--oura-mute)] mt-1">Gerencie preços, links de checkout e pixels.</p>
          </div>
          <button 
            onClick={handleSave} 
            className="bg-[var(--oura-ink)] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--oura-ink)]"
          >
            Salvar Tudo
          </button>
        </div>

        {msg && (
          <div className={`p-4 rounded-[16px] text-sm font-medium ${msg.includes("Erro") || msg.includes("Incorreta") ? "bg-red-50 text-red-600 border border-red-100" : "bg-emerald-50 text-emerald-700 border border-emerald-100"}`}>
            {msg}
          </div>
        )}

        <div className="grid gap-8">
          
          {/* Preço Geral */}
          <div className="bg-white p-6 rounded-[32px] shadow-sm border border-[var(--oura-line)]">
            <h2 className="text-xl font-medium mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[var(--oura-soft)] flex items-center justify-center text-sm">💰</span>
              Preço do Produto (Geral)
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-xl text-[var(--oura-mute)]">US$</span>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full max-w-[200px] text-2xl font-medium px-4 py-2 rounded-[16px] border border-[var(--oura-line)] focus:border-[var(--oura-ink)] focus:ring-1 focus:ring-[var(--oura-ink)] outline-none"
              />
            </div>
            <p className="text-xs text-[var(--oura-mute)] mt-3 ml-1">Aplicado a todos os modelos na página inicial.</p>
          </div>



          {/* Links de Checkout */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-[var(--oura-line)]">
            <h2 className="text-xl font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[var(--oura-soft)] flex items-center justify-center text-sm">🔗</span>
              Links de Checkout por Modelo e Cor
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Oura Ring 4 */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[var(--oura-ink)]">Oura Ring 4</h3>
                <div className="space-y-3">
                  {[
                    { id: 'standard-silver', label: 'Silver' },
                    { id: 'standard-black', label: 'Black' },
                    { id: 'standard-brushed-silver', label: 'Brushed Silver' },
                    { id: 'standard-gold', label: 'Gold' },
                    { id: 'standard-rose-gold', label: 'Rose Gold' },
                    { id: 'standard-stealth', label: 'Stealth' }
                  ].map(color => (
                    <div key={color.id} className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-[var(--oura-mute)] uppercase tracking-wider">{color.label}</label>
                      <input
                        type="text"
                        value={checkouts[color.id] || ""}
                        onChange={(e) => handleCheckoutChange(color.id, e.target.value)}
                        placeholder="https://..."
                        className="w-full text-sm px-4 py-2.5 rounded-[12px] border border-[var(--oura-line)] focus:border-[var(--oura-ink)] focus:ring-1 focus:ring-[var(--oura-ink)] outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Oura Ring 4 Ceramic */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-[var(--oura-ink)]">Oura Ring 4 Ceramic</h3>
                <div className="space-y-3">
                  {[
                    { id: 'ceramic-cloud', label: 'Cloud' },
                    { id: 'ceramic-midnight', label: 'Midnight' },
                    { id: 'ceramic-petal', label: 'Petal' },
                    { id: 'ceramic-tide', label: 'Tide' }
                  ].map(color => (
                    <div key={color.id} className="flex flex-col gap-1">
                      <label className="text-xs font-medium text-[var(--oura-mute)] uppercase tracking-wider">{color.label}</label>
                      <input
                        type="text"
                        value={checkouts[color.id] || ""}
                        onChange={(e) => handleCheckoutChange(color.id, e.target.value)}
                        placeholder="https://..."
                        className="w-full text-sm px-4 py-2.5 rounded-[12px] border border-[var(--oura-line)] focus:border-[var(--oura-ink)] focus:ring-1 focus:ring-[var(--oura-ink)] outline-none"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pixels UTMfy */}
          <div className="bg-white p-6 md:p-8 rounded-[32px] shadow-sm border border-[var(--oura-line)]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-[var(--oura-soft)] flex items-center justify-center text-sm">📈</span>
                Pixels UTMfy & Scripts Globais
              </h2>
              <button onClick={addUtmPixel} className="text-sm border border-[var(--oura-line)] px-4 py-2 rounded-full hover:bg-[var(--oura-soft)] transition-colors">
                + Adicionar Script
              </button>
            </div>
            
            <div className="space-y-4">
              {utmPixels.length === 0 && <p className="text-sm text-[var(--oura-mute)] p-4 bg-[var(--oura-soft)] rounded-[16px]">Nenhum script adicionado. (Eles serão injetados antes do &lt;/head&gt;)</p>}
              {utmPixels.map((pixel) => (
                <div key={pixel.id} className="p-4 rounded-[20px] border border-[var(--oura-line)] relative flex gap-3">
                  <textarea
                    value={pixel.code}
                    onChange={(e) => updateUtmPixel(pixel.id, e.target.value)}
                    placeholder="Apenas código javascript (sem tags <script>)"
                    className="w-full h-24 bg-[var(--oura-cream)] rounded-[12px] p-3 text-xs font-mono text-slate-700 outline-none focus:ring-1 focus:ring-[var(--oura-ink)]"
                  />
                  <button onClick={() => removeUtmPixel(pixel.id)} className="self-start w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-red-400 hover:text-red-600 transition-colors">
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
