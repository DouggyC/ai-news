'use client';

import productDataData from '@/data/productData.json';
import { ProductRow } from '@/types/index';
import { ProductTable } from '@/components/ProductTable';
import { validateData, ProductRowSchema } from '@/schemas/index';

const productData = validateData(
  ProductRowSchema.array(),
  productDataData,
  'productData.json',
);

export default function ProductsPage() {
  return (
    <div className='min-h-screen'>
      <main className='mx-auto px-4 sm:px-6 lg:px-10 py-8'>
        <div className='mb-12'>
          <h1
            style={{
              fontSize: '3rem',
              lineHeight: '0.87',
              fontWeight: 400,
              color: '#ffffff',
              marginBottom: '8px',
            }}
          >
            AI Products Landscape
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)',
              maxWidth: '48rem',
              lineHeight: '1.5',
            }}
          >
            Comprehensive overview of AI products from frontier companies
            organized by category.
          </p>
        </div>

        <ProductTable productData={productData} />

        <div
          style={{
            backgroundColor: '#333138',
            borderRadius: '4px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '32px',
            marginTop: '48px',
            boxShadow: '4px 4px 0px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              color: '#ffffff',
              marginBottom: '24px',
              lineHeight: '1.2',
            }}
          >
            Product Landscape Notes
          </h2>
          <div
            className='grid grid-cols-1 md:grid-cols-2 gap-8'
            style={{ color: 'rgba(255, 255, 255, 0.6)', lineHeight: '1.7' }}
          >
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '8px',
                }}
              >
                Foundation Model Categories
              </h3>
              <p style={{ fontSize: '13px' }}>
                Products are organized into proprietary (closed) and open-weight
                foundation model categories. Proprietary models are available
                via API with usage-based pricing, while open models can be
                downloaded and self-hosted.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '8px',
                }}
              >
                Multi-Category Products
              </h3>
              <p style={{ fontSize: '13px' }}>
                Some products appear across multiple categories (e.g., Claude
                appears in Chat, CLI, API, and Enterprise). This reflects their
                use across different interaction paradigms.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '8px',
                }}
              >
                Enterprise vs. Consumer
              </h3>
              <p style={{ fontSize: '13px' }}>
                Products marked as Enterprise typically offer additional
                features like SSO, compliance certifications, private deployment
                options, and dedicated support.
              </p>
            </div>
            <div>
              <h3
                style={{
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.8)',
                  marginBottom: '8px',
                }}
              >
                Sovereign Stack
              </h3>
              <p style={{ fontSize: '13px' }}>
                Products in Sovereign categories (Engine, Agent, Orchestrator)
                are designed for private deployment and self-hosting, keeping
                data within organizational boundaries.
              </p>
            </div>
          </div>
        </div>

        <div
          className='mt-8 text-center'
          style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.4)' }}
        >
          <p>
            Product data sourced from company documentation • Last Updated: May
            12, 2026 2026
          </p>
        </div>
      </main>
    </div>
  );
}
