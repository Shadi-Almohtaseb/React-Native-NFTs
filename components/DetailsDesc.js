import { View, Text, Button } from "react-native";
import React, { useState } from "react";
import { EthPrice, NFTTitle } from "./SubInfo";
import { COLORS, FONTS, SIZES } from "../constants";

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>
      <View style={{ marginVertical: SIZES.extraLarge * 1.3 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.primary,
            fontWeight:"800"
          }}
        >
          Description
        </Text>
        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              color: COLORS.secondary,
              fontWeight:'600',
              lineHeight: SIZES.large,
            }}
          >
            {!readMore ? text : data.description}
            {text ? <Text style={{fontWeight:"900"}} onPress={() => setReadMore(!readMore)}>{ !readMore ? '...Read More' : '...Show Less'}</Text> : null}
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDesc;
