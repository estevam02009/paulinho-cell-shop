export interface Product {
    id: string;
    name: string;
    slug: string;
    category: string;
    description: string;
    price: number;
    image: string;
    specifications: {
        [key: string]: string;
    };
}

const products: Product[] = [
    {
        id: '1',
        name: 'Sansung Galaxy S23',
        slug: 'sansung-galaxy-s23',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/samsung-galaxy-s23.jpg',
        specifications: {
            display: '6.1\n' +
                '1080 x 2340 pixel\n' +
                '422 ppi\n' +
                'Dynamic AMOLED 2X\n' +
                '120 Hz\n' +
                '16 milhões\n' +
                'Gorilla Glass Victus 2',
            processador: '1x 3.2 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz Cortex-A710 + 3x 2.0 GHz Cortex-A510\n' +
                'Snapdragon 8 Gen 2 Qualcomm SM8550-AB',
            ram: '8 GB',
            armazenamento: '128GB / 256GB',
            camera: '50 Mp + 10 Mp + 12 Mp\n' +
                'Resolução 8165 x 6124 pixel',
        },
    },
    {
        id: '2',
        name: 'Fones de ouvido sem fio Pro',
        slug: 'fones-de-ouvidos-sem-fio-pro',
        category: 'acessorios',
        description: 'Fones de ouvido sem fio premium com cancelamento de ruído.',
        price: 149.00,
        image: '/images/acessories/wireless-earbuds-pro.jpg',
        specifications: {
            bateria: '8 hours',
            conectividade: 'Bluetooth 5.2',
            características: 'Cancelamento de ruído ativo, resistência à água',
        },
    },
    {
        id: '3',
        name: 'iPhone 13',
        slug: 'iphone-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/iphone-13.jpg',
        specifications: {
            display: '6.1 1170 x 2532 pixel 460 ppi\n' +
                'Super Retina XDR OLED\n' +
                '60 Hz\n' +
                '16 milhões\n' +
                'Ceramic Shield',
            processador: '2x 3.23 GHz Avalanche + 4x 2.02 GHz Blizzard',
            ram: '4 GB',
            armazenamento: '128GB / 256GB / 512GB',
            camera: 'Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP',
        }
    },
    {
        id: '4',
        name: 'Redmi Note 13',
        slug: 'redmi-note-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 1099.99,
        image: '/images/phones/xiaomi-13.png',
        specifications: {
            display: '6.67\n' +
                '1080 x 2400 pixel\n' +
                '395 ppi\n' +
                'AMOLED\n' +
                '120 Hz\n' +
                'Gorilla Glass 5',
            processador: '2x 2.4 GHz Cortex-A76 + 6x 2.0 GHz Cortex-A55\n' +
                'Dimensity 6080 MediaTek',
            ram: '6 GB',
            armazenamento: '128GB',
            camera: '108 Mp + 8 Mp + 2 Mp\n' +
                '12000 x 9000 pixel',
        },
    },
    {
        id: '5',
        name: 'Sansung Galaxy S23',
        slug: 'sansung-galaxy-s23',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/samsung-galaxy-s23.jpg',
        specifications: {
            display: '6.1\n' +
                '1080 x 2340 pixel\n' +
                '422 ppi\n' +
                'Dynamic AMOLED 2X\n' +
                '120 Hz\n' +
                '16 milhões\n' +
                'Gorilla Glass Victus 2',
            processador: '1x 3.2 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz Cortex-A710 + 3x 2.0 GHz Cortex-A510\n' +
                'Snapdragon 8 Gen 2 Qualcomm SM8550-AB',
            ram: '8 GB',
            armazenamento: '128GB / 256GB',
            camera: '50 Mp + 10 Mp + 12 Mp\n' +
                'Resolução 8165 x 6124 pixel',
        },
    },
    {
        id: '6',
        name: 'Fones de ouvido sem fio Pro',
        slug: 'fones-de-ouvidos-sem-fio-pro',
        category: 'acessorios',
        description: 'Fones de ouvido sem fio premium com cancelamento de ruído.',
        price: 149.00,
        image: '/images/acessories/wireless-earbuds-pro.jpg',
        specifications: {
            bateria: '8 hours',
            conectividade: 'Bluetooth 5.2',
            características: 'Cancelamento de ruído ativo, resistência à água',
        },
    },
    {
        id: '7',
        name: 'iPhone 13',
        slug: 'iphone-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/iphone-13.jpg',
        specifications: {
            display: '6.1 1170 x 2532 pixel 460 ppi\n' +
                'Super Retina XDR OLED\n' +
                '60 Hz\n' +
                '16 milhões\n' +
                'Ceramic Shield',
            processador: '2x 3.23 GHz Avalanche + 4x 2.02 GHz Blizzard',
            ram: '4 GB',
            armazenamento: '128GB / 256GB / 512GB',
            camera: 'Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP',
        }
    },
    {
        id: '8',
        name: 'Redmi Note 13',
        slug: 'redmi-note-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 1099.99,
        image: '/images/phones/xiaomi-13.png',
        specifications: {
            display: '6.67\n' +
                '1080 x 2400 pixel\n' +
                '395 ppi\n' +
                'AMOLED\n' +
                '120 Hz\n' +
                'Gorilla Glass 5',
            processador: '2x 2.4 GHz Cortex-A76 + 6x 2.0 GHz Cortex-A55\n' +
                'Dimensity 6080 MediaTek',
            ram: '6 GB',
            armazenamento: '128GB',
            camera: '108 Mp + 8 Mp + 2 Mp\n' +
                '12000 x 9000 pixel',
        },
    },
    {
        id: '9',
        name: 'Sansung Galaxy S23',
        slug: 'sansung-galaxy-s23',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/samsung-galaxy-s23.jpg',
        specifications: {
            display: '6.1\n' +
                '1080 x 2340 pixel\n' +
                '422 ppi\n' +
                'Dynamic AMOLED 2X\n' +
                '120 Hz\n' +
                '16 milhões\n' +
                'Gorilla Glass Victus 2',
            processador: '1x 3.2 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz Cortex-A710 + 3x 2.0 GHz Cortex-A510\n' +
                'Snapdragon 8 Gen 2 Qualcomm SM8550-AB',
            ram: '8 GB',
            armazenamento: '128GB / 256GB',
            camera: '50 Mp + 10 Mp + 12 Mp\n' +
                'Resolução 8165 x 6124 pixel',
        },
    },
    {
        id: '10',
        name: 'Fones de ouvido sem fio Pro',
        slug: 'fones-de-ouvidos-sem-fio-pro',
        category: 'acessorios',
        description: 'Fones de ouvido sem fio premium com cancelamento de ruído.',
        price: 149.00,
        image: '/images/acessories/wireless-earbuds-pro.jpg',
        specifications: {
            bateria: '8 hours',
            conectividade: 'Bluetooth 5.2',
            características: 'Cancelamento de ruído ativo, resistência à água',
        },
    },
    {
        id: '11',
        name: 'iPhone 13',
        slug: 'iphone-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/iphone-13.jpg',
        specifications: {
            display: '6.1 1170 x 2532 pixel 460 ppi\n' +
                'Super Retina XDR OLED\n' +
                '60 Hz\n' +
                '16 milhões\n' +
                'Ceramic Shield',
            processador: '2x 3.23 GHz Avalanche + 4x 2.02 GHz Blizzard',
            ram: '4 GB',
            armazenamento: '128GB / 256GB / 512GB',
            camera: 'Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP',
        }
    },
    {
        id: '12',
        name: 'Redmi Note 13',
        slug: 'redmi-note-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 1099.99,
        image: '/images/phones/xiaomi-13.png',
        specifications: {
            display: '6.67\n' +
                '1080 x 2400 pixel\n' +
                '395 ppi\n' +
                'AMOLED\n' +
                '120 Hz\n' +
                'Gorilla Glass 5',
            processador: '2x 2.4 GHz Cortex-A76 + 6x 2.0 GHz Cortex-A55\n' +
                'Dimensity 6080 MediaTek',
            ram: '6 GB',
            armazenamento: '128GB',
            camera: '108 Mp + 8 Mp + 2 Mp\n' +
                '12000 x 9000 pixel',
        },
    },
    {
        id: '13',
        name: 'Sansung Galaxy S23',
        slug: 'sansung-galaxy-s23',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/samsung-galaxy-s23.jpg',
        specifications: {
            display: '6.1\n' +
                '1080 x 2340 pixel\n' +
                '422 ppi\n' +
                'Dynamic AMOLED 2X\n' +
                '120 Hz\n' +
                '16 milhões\n' +
                'Gorilla Glass Victus 2',
            processador: '1x 3.2 GHz Cortex-X3 + 2x 2.8 GHz Cortex-A715 + 2x 2.8 GHz Cortex-A710 + 3x 2.0 GHz Cortex-A510\n' +
                'Snapdragon 8 Gen 2 Qualcomm SM8550-AB',
            ram: '8 GB',
            armazenamento: '128GB / 256GB',
            camera: '50 Mp + 10 Mp + 12 Mp\n' +
                'Resolução 8165 x 6124 pixel',
        },
    },
    {
        id: '14',
        name: 'Fones de ouvido sem fio Pro',
        slug: 'fones-de-ouvidos-sem-fio-pro',
        category: 'acessorios',
        description: 'Fones de ouvido sem fio premium com cancelamento de ruído.',
        price: 149.00,
        image: '/images/acessories/wireless-earbuds-pro.jpg',
        specifications: {
            bateria: '8 hours',
            conectividade: 'Bluetooth 5.2',
            características: 'Cancelamento de ruído ativo, resistência à água',
        },
    },
    {
        id: '15',
        name: 'iPhone 13',
        slug: 'iphone-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 4499.99,
        image: '/images/phones/iphone-13.jpg',
        specifications: {
            display: '6.1 1170 x 2532 pixel 460 ppi\n' +
                'Super Retina XDR OLED\n' +
                '60 Hz\n' +
                '16 milhões\n' +
                'Ceramic Shield',
            processador: '2x 3.23 GHz Avalanche + 4x 2.02 GHz Blizzard',
            ram: '4 GB',
            armazenamento: '128GB / 256GB / 512GB',
            camera: 'Sistema de câmera dupla (grande-angular e ultra-angular) de 12 MP',
        }
    },
    {
        id: '16',
        name: 'Redmi Note 13',
        slug: 'redmi-note-13',
        category: 'smartphones',
        description: 'Um smartphone poderoso e elegante.',
        price: 1099.99,
        image: '/images/phones/xiaomi-13.png',
        specifications: {
            display: '6.67\n' +
                '1080 x 2400 pixel\n' +
                '395 ppi\n' +
                'AMOLED\n' +
                '120 Hz\n' +
                'Gorilla Glass 5',
            processador: '2x 2.4 GHz Cortex-A76 + 6x 2.0 GHz Cortex-A55\n' +
                'Dimensity 6080 MediaTek',
            ram: '6 GB',
            armazenamento: '128GB',
            camera: '108 Mp + 8 Mp + 2 Mp\n' +
                '12000 x 9000 pixel',
        },
    },
    // ... more products
];

export default products;