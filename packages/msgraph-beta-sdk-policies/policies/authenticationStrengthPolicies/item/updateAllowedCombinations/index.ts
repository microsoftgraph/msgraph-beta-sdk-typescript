/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { AuthenticationMethodModes, AuthenticationMethodModesObject, createUpdateAllowedCombinationsResultFromDiscriminatorValue, serializeUpdateAllowedCombinationsResult, type UpdateAllowedCombinationsResult } from '@microsoft/msgraph-beta-sdk/models/';
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/';
import { type AdditionalDataHolder, type BackedModel, type BackingStore, type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns a updateAllowedCombinationsPostRequestBody
 */
export function createUpdateAllowedCombinationsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoUpdateAllowedCombinationsPostRequestBody;
}
/**
 * The deserialization information for the current model
 * @returns a Record<string, (node: ParseNode) => void>
 */
export function deserializeIntoUpdateAllowedCombinationsPostRequestBody(updateAllowedCombinationsPostRequestBody: Partial<UpdateAllowedCombinationsPostRequestBody> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedCombinations": n => { updateAllowedCombinationsPostRequestBody.allowedCombinations = n.getCollectionOfEnumValues<AuthenticationMethodModes>(AuthenticationMethodModesObject); },
        "backingStoreEnabled": n => { updateAllowedCombinationsPostRequestBody.backingStoreEnabled = true; },
    }
}
/**
 * Serializes information the current object
 * @param writer Serialization writer to use to serialize this model
 */
export function serializeUpdateAllowedCombinationsPostRequestBody(writer: SerializationWriter, updateAllowedCombinationsPostRequestBody: Partial<UpdateAllowedCombinationsPostRequestBody> | undefined = {}) : void {
    if(updateAllowedCombinationsPostRequestBody.allowedCombinations)
    writer.writeEnumValue<AuthenticationMethodModes>("allowedCombinations", ...updateAllowedCombinationsPostRequestBody.allowedCombinations);
    writer.writeAdditionalData(updateAllowedCombinationsPostRequestBody.additionalData);
}
export interface UpdateAllowedCombinationsPostRequestBody extends AdditionalDataHolder, BackedModel, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The allowedCombinations property
     */
    allowedCombinations?: AuthenticationMethodModes[];
    /**
     * Stores model information.
     */
    backingStoreEnabled?: boolean;
}
/**
 * Provides operations to call the updateAllowedCombinations method.
 */
export interface UpdateAllowedCombinationsRequestBuilder extends BaseRequestBuilder<UpdateAllowedCombinationsRequestBuilder> {
    /**
     * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a Promise of UpdateAllowedCombinationsResult
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-updateallowedcombinations?view=graph-rest-1.0|Find more info here}
     */
     post(body: UpdateAllowedCombinationsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<UpdateAllowedCombinationsResult | undefined>;
    /**
     * Update the allowedCombinations property of an authenticationStrengthPolicy object. To update other properties of an authenticationStrengthPolicy object, use the Update authenticationStrengthPolicy method.
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns a RequestInformation
     */
     toPostRequestInformation(body: UpdateAllowedCombinationsPostRequestBody, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Metadata for all the requests in the request builder.
 */
export const UpdateAllowedCombinationsRequestBuilderRequestsMetadata: RequestsMetadata = {
    post: {
        responseBodyContentType: "application/json",
        errorMappings: {
            _4XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
            _5XX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "sendAsync",
        responseBodyFactory:  createUpdateAllowedCombinationsResultFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializeUpdateAllowedCombinationsPostRequestBody,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/**
 * Uri template for the request builder.
 */
export const UpdateAllowedCombinationsRequestBuilderUriTemplate = "{+baseurl}/policies/authenticationStrengthPolicies/{authenticationStrengthPolicy%2Did}/updateAllowedCombinations";
/* tslint:enable */
/* eslint-enable */