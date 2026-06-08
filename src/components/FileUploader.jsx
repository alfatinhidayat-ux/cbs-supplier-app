import { useRef, useState } from 'react'
import { Upload, X, FileText, Image } from 'lucide-react'

function formatSize(bytes) {
  if (!bytes) return ''
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

export default function FileUploader({ label, accept, multiple = false, files, onFilesChange, maxFiles = 1, icon: Icon = Upload }) {
  const inputRef = useRef()
  const [isDragging, setIsDragging] = useState(false)

  const handleFiles = (newFiles) => {
    const arr = Array.from(newFiles)
    const remaining = maxFiles - (files?.length || 0)
    const toAdd = arr.slice(0, remaining)

    toAdd.forEach((file) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const fileData = {
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: e.target.result,
        }
        onFilesChange((prev) => {
          const updated = multiple ? [...(prev || []), fileData] : [fileData]
          return updated.slice(0, maxFiles)
        })
      }
      reader.readAsDataURL(file)
    })
  }

  const removeFile = (idx) => {
    onFilesChange((prev) => prev.filter((_, i) => i !== idx))
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  const fileList = files || []
  const isImage = (type) => type?.startsWith('image/')
  const canAdd = fileList.length < maxFiles

  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">{label}</label>

      {/* Drop zone */}
      {canAdd && (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`drop-zone border-2 border-dashed rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer transition-all ${isDragging ? 'border-blue-500 bg-blue-50 drag-over' : 'border-gray-200 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/50'}`}
        >
          <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
            <Icon size={20} className="text-blue-600" />
          </div>
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">Ketuk untuk upload</p>
            <p className="text-xs text-gray-400 mt-0.5">
              {accept?.split(',').join(', ')} {maxFiles > 1 ? `· Maks ${maxFiles} file` : ''}
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
        </div>
      )}

      {/* Preview list */}
      {fileList.length > 0 && (
        <div className={`${multiple && fileList.length > 1 ? 'grid grid-cols-2 gap-2' : 'space-y-2'}`}>
          {fileList.map((file, idx) => (
            <div key={idx} className="relative">
              {isImage(file.type) ? (
                <div className="relative rounded-xl overflow-hidden bg-gray-100 aspect-square">
                  <img src={file.dataUrl} alt={file.name} className="w-full h-full object-cover" />
                  <button
                    onClick={() => removeFile(idx)}
                    className="absolute top-1.5 right-1.5 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md"
                  >
                    <X size={12} className="text-white" />
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText size={18} className="text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 truncate">{file.name}</p>
                    <p className="text-xs text-gray-400">{formatSize(file.size)}</p>
                  </div>
                  <button onClick={() => removeFile(idx)} className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-red-500" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
