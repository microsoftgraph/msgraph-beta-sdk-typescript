/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
// @ts-ignore
import { createAuthenticationStrengthPolicyFromDiscriminatorValue, deserializeIntoBaseCollectionPaginationCountResponse, serializeAuthenticationStrengthPolicy, serializeBaseCollectionPaginationCountResponse, type AuthenticationStrengthPolicy, type BaseCollectionPaginationCountResponse } from '@microsoft/msgraph-beta-sdk/models/index.js';
// @ts-ignore
import { createODataErrorFromDiscriminatorValue, type ODataError } from '@microsoft/msgraph-beta-sdk/models/oDataErrors/index.js';
// @ts-ignore
import { type BaseRequestBuilder, type Parsable, type ParsableFactory, type ParseNode, type RequestConfiguration, type RequestInformation, type RequestsMetadata, type SerializationWriter } from '@microsoft/kiota-abstractions';

/**
 * Creates a new instance of the appropriate class based on discriminator value
 * @param parseNode The parse node to use to read the discriminator value and create the object
 * @returns {FindByMethodModeWithAuthenticationMethodModesGetResponse}
 */
// @ts-ignore
export function createFindByMethodModeWithAuthenticationMethodModesGetResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ((instance?: Parsable) => Record<string, (node: ParseNode) => void>) {
    return deserializeIntoFindByMethodModeWithAuthenticationMethodModesGetResponse;
}
/**
 * The deserialization information for the current model
 * @param FindByMethodModeWithAuthenticationMethodModesGetResponse The instance to deserialize into.
 * @returns {Record<string, (node: ParseNode) => void>}
 */
// @ts-ignore
export function deserializeIntoFindByMethodModeWithAuthenticationMethodModesGetResponse(findByMethodModeWithAuthenticationMethodModesGetResponse: Partial<FindByMethodModeWithAuthenticationMethodModesGetResponse> | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(findByMethodModeWithAuthenticationMethodModesGetResponse),
        "value": n => { findByMethodModeWithAuthenticationMethodModesGetResponse.value = n.getCollectionOfObjectValues<AuthenticationStrengthPolicy>(createAuthenticationStrengthPolicyFromDiscriminatorValue); },
    }
}
export interface FindByMethodModeWithAuthenticationMethodModesGetResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: AuthenticationStrengthPolicy[] | null;
}
/**
 * Provides operations to call the findByMethodMode method.
 */
export interface FindByMethodModeWithAuthenticationMethodModesRequestBuilder extends BaseRequestBuilder<FindByMethodModeWithAuthenticationMethodModesRequestBuilder> {
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties filtered to only include policies that include the authentication method mode specified in the request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<FindByMethodModeWithAuthenticationMethodModesGetResponse>}
     * @throws {ODataError} error when the service returns a 4XX or 5XX status code
     * @deprecated The findByMethodMode function is deprecated. Please use OData filter query instead. as of 2023-02/FindByMethodModeRemove on 2023-02-01 and will be removed 2023-03-31
     * @see {@link https://learn.microsoft.com/graph/api/authenticationstrengthpolicy-findbymethodmode?view=graph-rest-beta|Find more info here}
     */
     get(requestConfiguration?: RequestConfiguration<FindByMethodModeWithAuthenticationMethodModesRequestBuilderGetQueryParameters> | undefined) : Promise<FindByMethodModeWithAuthenticationMethodModesGetResponse | undefined>;
    /**
     * Get a list of the authenticationStrengthPolicy objects and their properties filtered to only include policies that include the authentication method mode specified in the request.
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     * @deprecated The findByMethodMode function is deprecated. Please use OData filter query instead. as of 2023-02/FindByMethodModeRemove on 2023-02-01 and will be removed 2023-03-31
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<FindByMethodModeWithAuthenticationMethodModesRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
}
/**
 * Get a list of the authenticationStrengthPolicy objects and their properties filtered to only include policies that include the authentication method mode specified in the request.
 */
export interface FindByMethodModeWithAuthenticationMethodModesRequestBuilderGetQueryParameters {
    /**
     * Include count of items
     */
    count?: boolean;
    /**
     * Expand related entities
     */
    expand?: string[];
    /**
     * Filter items by property values
     */
    filter?: string;
    /**
     * Order items by property values
     */
    orderby?: string[];
    /**
     * Search items by search phrases
     */
    search?: string;
    /**
     * Select properties to be returned
     */
    select?: string[];
    /**
     * Skip the first n items
     */
    skip?: number;
    /**
     * Show only the first n items
     */
    top?: number;
}
/**
 * Serializes information the current object
 * @param FindByMethodModeWithAuthenticationMethodModesGetResponse The instance to serialize from.
 * @param isSerializingDerivedType A boolean indicating whether the serialization is for a derived type.
 * @param writer Serialization writer to use to serialize this model
 */
// @ts-ignore
export function serializeFindByMethodModeWithAuthenticationMethodModesGetResponse(writer: SerializationWriter, findByMethodModeWithAuthenticationMethodModesGetResponse: Partial<FindByMethodModeWithAuthenticationMethodModesGetResponse> | undefined | null = {}, isSerializingDerivedType: boolean = false) : void {
    if (!findByMethodModeWithAuthenticationMethodModesGetResponse || isSerializingDerivedType) { return; }
    serializeBaseCollectionPaginationCountResponse(writer, findByMethodModeWithAuthenticationMethodModesGetResponse, isSerializingDerivedType)
    writer.writeCollectionOfObjectValues<AuthenticationStrengthPolicy>("value", findByMethodModeWithAuthenticationMethodModesGetResponse.value, serializeAuthenticationStrengthPolicy);
}
/**
 * Uri template for the request builder.
 */
export const FindByMethodModeWithAuthenticationMethodModesRequestBuilderUriTemplate = "{+baseurl}/identity/conditionalAccess/authenticationStrength/policies/findByMethodMode(authenticationMethodModes={authenticationMethodModes}){?%24count,%24expand,%24filter,%24orderby,%24search,%24select,%24skip,%24top}";
/**
 * Mapper for query parameters from symbol name to serialization name represented as a constant.
 */
const FindByMethodModeWithAuthenticationMethodModesRequestBuilderGetQueryParametersMapper: Record<string, string> = {
    "count": "%24count",
    "expand": "%24expand",
    "filter": "%24filter",
    "orderby": "%24orderby",
    "search": "%24search",
    "select": "%24select",
    "skip": "%24skip",
    "top": "%24top",
};
/**
 * Metadata for all the requests in the request builder.
 */
export const FindByMethodModeWithAuthenticationMethodModesRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: FindByMethodModeWithAuthenticationMethodModesRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        errorMappings: {
            XXX: createODataErrorFromDiscriminatorValue as ParsableFactory<Parsable>,
        },
        adapterMethodName: "send",
        responseBodyFactory:  createFindByMethodModeWithAuthenticationMethodModesGetResponseFromDiscriminatorValue,
        queryParametersMapper: FindByMethodModeWithAuthenticationMethodModesRequestBuilderGetQueryParametersMapper,
    },
};
/* tslint:enable */
/* eslint-enable */
