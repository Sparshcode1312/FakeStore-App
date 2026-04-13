import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header'
import ProductCard from './components/ProductCard'
import { Loader, ErrorMessage, EmptyState } from './components/StatusMessage'

function App() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true)
        // Using FakeStore API
        const response = await fetch('https://fakestoreapi.com/products')
        
        if (!response.ok) {
          throw new Error('Failed to fetch products. Server returned ' + response.status)
        }
        
        const data = await response.json()
        setProducts(data)
        setError(null)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filter products based on search query (checks title, category, description)
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase()
    return products.filter(product => 
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    )
  }, [products, searchQuery])

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container main-content">
        <section>
          <div className="section-header">
            <h1 className="section-title">Discover Products</h1>
            <p className="section-subtitle">
              Browse our exclusive collection of clothing, electronics, and jewelry.
            </p>
          </div>

          {isLoading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage message={error} />
          ) : filteredProducts.length === 0 ? (
            <EmptyState query={searchQuery} />
          ) : (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  )
}

export default App
