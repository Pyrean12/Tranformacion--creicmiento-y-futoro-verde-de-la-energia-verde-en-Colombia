import pandas as pd
import matplotlib.pyplot as plt

# 1️⃣ Cargar datos desde OWID (energía mundial)
url = "https://github.com/owid/energy-data/raw/master/owid-energy-data.csv"
df = pd.read_csv(url)

# 2️⃣ Filtrar solo los datos de Colombia
colombia = df[df["country"] == "Colombia"]

print(colombia.describe())


plt.figure(figsize=(9,5))
plt.plot(colombia["year"], colombia["solar_share_energy"], color='orange', label="Solar", linewidth=2)
plt.plot(colombia["year"], colombia["wind_share_energy"], color='blue', label="Eólica", linewidth=2)
plt.title("Energía Solar y Eólica en Colombia", fontsize=14)
plt.xlabel("Año")
plt.ylabel("Porcentaje de la Energía Total (%)")
plt.legend()
plt.grid(True)
plt.tight_layout()
plt.savefig("static/grafica2.png")
plt.close()


print("✅ Gráficas generadas correctamente en la carpeta 'static/'")