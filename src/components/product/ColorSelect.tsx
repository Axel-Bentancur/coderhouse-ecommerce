//Types
import { ColorOptions } from '../../interfaces/IProducts';

export default function ColorPicker({selectColor, choosenColor, colorOptions, } : {selectColor: (color:string) => void, choosenColor:string | undefined, colorOptions: ColorOptions[]}) {

  const handleColorChange = (color:string) => {
    selectColor(color);
  };

  return (
    <div className="space-y-2 mb-8">
      <p className="font-bold mb-3">Color: </p>
      <div className="flex items-center space-x-2">
        {colorOptions.map((color) => (
          <label
            key={color.name}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-lg cursor-pointer ${
              choosenColor === color.name ? `ring ring-offset-2 ring-[${color.hex}]` : ''
            }`}
            style={{ backgroundColor: color.hex }}
          >
            <input
              type="radio"
              className="sr-only"
              name="color"
              value={color.hex}
              checked={choosenColor === color.hex}
              onChange={() => handleColorChange(color.name)}
            />
            <span className="sr-only">{color.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
