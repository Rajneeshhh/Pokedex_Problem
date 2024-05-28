// import { PrismaClient } from '@prisma/client';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.pokemon.createMany({
    data: [
      { name: "Bulbasaur", types: ["grass"], sprite: "https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png" },
      { name: "Charmander", types: ["fire"], sprite: "https://seeklogo.com/images/C/charmander-logo-193AF64F48-seeklogo.com.png" },
      { name: "Pikachu", types: ["lightening"], sprite: "https://seeklogo.com/images/P/pikachu-logo-42CAFBCD00-seeklogo.com.png" },
      { name: "Squirtle", types: ["water"], sprite: "https://seeklogo.com/images/S/squirtle-logo-4EA3D6011D-seeklogo.com.png" },
      { name: "Psyduck", types: ["hypnosis"], sprite: "https://seeklogo.com/images/P/psyduck-logo-BD70DF6321-seeklogo.com.png" },
      { name: "Ivysaur", types: ["grass"], sprite: "https://seeklogo.com/images/I/ivysaur-logo-FB8D9A5B96-seeklogo.com.png" },
      { name: "Venusaur", types: ["grass"], sprite: "https://seeklogo.com/images/V/venusaur-logo-E7BF4FDFDB-seeklogo.com.png" },
      { name: "Raichu", types: ["lightening"], sprite: "https://seeklogo.com/images/R/raichu-logo-B4B58A22A3-seeklogo.com.png" },
      { name: "Charmeleon", types: ["fire"], sprite: "https://seeklogo.com/images/C/charmeleon-logo-3C525A08C4-seeklogo.com.png" },
      { name: "Charizard", types: ["fire"], sprite: "https://seeklogo.com/images/C/charizard-logo-DB13CC1850-seeklogo.com.png" },
      { name: "Wartortle", types: ["water"], sprite: "https://seeklogo.com/images/W/wartortle-logo-5D4BC1B26E-seeklogo.com.png" },
      // 
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
