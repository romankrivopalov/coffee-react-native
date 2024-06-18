// Usage react-native-svg
import * as React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg';
import { Colors } from '../../shared/tokens';

const Search = () => (
    <Svg
        width={28}
        height={28}
        fill="none"
    >
        <G
            stroke={Colors.white}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            filter="url(#a)"
        >
            <Path d="M13.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM22.333 18.333l-1.666-1.666" />
        </G>
        <Defs></Defs>
    </Svg>
)

export default Search